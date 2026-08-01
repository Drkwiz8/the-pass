#!/bin/sh
# Builds the itch.io upload: the game plus its link-preview image.
# itch serves index.html at the zip root, so no folder wrapper.
set -e
rm -f the-pass.zip
if command -v powershell.exe >/dev/null 2>&1; then
  powershell.exe -NoProfile -Command \
    "Compress-Archive -Path index.html,og.png -DestinationPath the-pass.zip -Force"
else
  zip -9 the-pass.zip index.html og.png
fi
echo "built the-pass.zip"
