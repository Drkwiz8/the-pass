const {decode}=require(process.argv[2]+'/dec.js');
const fs=require('fs'),zlib=require('zlib');
// 5x7 pixel font — only the glyphs the cover needs
const F={
 B:['####.','#...#','#...#','####.','#...#','#...#','####.'],
 A:['.###.','#...#','#...#','#####','#...#','#...#','#...#'],
 D:['####.','#...#','#...#','#...#','#...#','#...#','####.'],
 E:['#####','#....','#....','####.','#....','#....','#####'],
 H:['#...#','#...#','#...#','#####','#...#','#...#','#...#'],
 I:['#####','..#..','..#..','..#..','..#..','..#..','#####'],
 K:['#...#','#..#.','#.#..','##...','#.#..','#..#.','#...#'],
 L:['#....','#....','#....','#....','#....','#....','#####'],
 N:['#...#','##..#','##..#','#.#.#','#..##','#..##','#...#'],
 O:['.###.','#...#','#...#','#...#','#...#','#...#','.###.'],
 C:['.####','#....','#....','#....','#....','#....','.####'],
 P:['####.','#...#','#...#','####.','#....','#....','#....'],
 R:['####.','#...#','#...#','####.','#.#..','#..#.','#...#'],
 S:['.####','#....','#....','.###.','....#','....#','####.'],
 T:['#####','..#..','..#..','..#..','..#..','..#..','..#..'],
 U:['#...#','#...#','#...#','#...#','#...#','#...#','.###.'],
 ' ':['.....','.....','.....','.....','.....','.....','.....'],
};
const d=decode('banner_src.png');
const OW=1200,OH=630,S=7;
const ox=Math.floor((OW-d.W*S)/2), oy=Math.floor((OH-d.H*S)/2);
const buf=Buffer.alloc(OW*OH*4);
for(let i=0;i<OW*OH;i++){buf[i*4]=0x0d;buf[i*4+1]=0x11;buf[i*4+2]=0x14;buf[i*4+3]=255;}
for(let y=0;y<OH;y++)for(let x=0;x<OW;x++){
  const sx=Math.floor((x-ox)/S), sy=Math.floor((y-oy)/S);
  if(sx<0||sy<0||sx>=d.W||sy>=d.H) continue;
  const si=sy*d.stride+sx*d.ch; if((d.ch===4?d.px[si+3]:255)<40) continue;
  const oi=(y*OW+x)*4; buf[oi]=d.px[si];buf[oi+1]=d.px[si+1];buf[oi+2]=d.px[si+2];buf[oi+3]=255;
}
const px=(x,y,c)=>{ if(x<0||y<0||x>=OW||y>=OH) return; const i=(y*OW+x)*4;
  buf[i]=c[0];buf[i+1]=c[1];buf[i+2]=c[2];buf[i+3]=255; };
// darken a band so the title reads over the fire
function band(y0,y1,a){ for(let y=y0;y<y1;y++)for(let x=0;x<OW;x++){ const i=(y*OW+x)*4;
  buf[i]*=1-a; buf[i+1]*=1-a; buf[i+2]*=1-a; } }
function text(str,cx,cy,scale,col,outline){
  const w=str.length*6*scale-scale, x0=Math.round(cx-w/2), y0=Math.round(cy-3.5*scale);
  // outline first
  if(outline) for(let dy=-scale;dy<=scale;dy+=scale)for(let dx=-scale;dx<=scale;dx+=scale)
    if(dx||dy) draw(str,x0+dx,y0+dy,scale,outline);
  draw(str,x0,y0,scale,col);
}
function draw(str,x0,y0,scale,col){
  const missing=[...str].filter(c=>!(c in F));
  if(missing.length) throw new Error('cover font missing glyphs: '+[...new Set(missing)].join(','));
  [...str].forEach((ch,ci)=>{ const g=F[ch]||F[' '];
    g.forEach((row,ry)=>[...row].forEach((c,rx)=>{ if(c!=='#') return;
      for(let sy=0;sy<scale;sy++)for(let sx=0;sx<scale;sx++)
        px(x0+(ci*6+rx)*scale+sx, y0+ry*scale+sy, col); })); });
}
band(150,330,0.62);
text('THE PASS', OW/2, 232, 14, [255,236,214], [8,10,13]);
text('DINNER RUSH', OW/2, 316, 5, [255,150,60], [8,10,13]);
band(560,616,0.55);
text('A LINE COOK BUILT THIS', OW/2, 588, 3, [190,198,206], [8,10,13]);
const raw=Buffer.alloc((OW*4+1)*OH); let o=0;
for(let y=0;y<OH;y++){ raw[o++]=0; buf.copy(raw,o,y*OW*4,(y+1)*OW*4); o+=OW*4; }
function crc32(b){let c,t=[];for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c;}
  let x=0xFFFFFFFF;for(let i=0;i<b.length;i++)x=t[(x^b[i])&255]^(x>>>8);return (x^0xFFFFFFFF)>>>0;}
const ch=(t,dd)=>{const l=Buffer.alloc(4);l.writeUInt32BE(dd.length);const td=Buffer.concat([Buffer.from(t),dd]);
  const c=Buffer.alloc(4);c.writeUInt32BE(crc32(td));return Buffer.concat([l,td,c]);};
const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(OW,0);ihdr.writeUInt32BE(OH,4);ihdr[8]=8;ihdr[9]=6;
fs.writeFileSync('og.png',Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),ch('IHDR',ihdr),ch('IDAT',zlib.deflateSync(raw,{level:9})),ch('IEND',Buffer.alloc(0))]));
console.log('cover written with title,',Math.round(fs.statSync('og.png').size/1024)+'KB');
