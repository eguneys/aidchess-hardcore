cd ..
git clone https://github.com/eguneys/lchessanalysis
cd lchessanalysis
pnpm install
pnpm validate
pnpm link --dir ./ --global
cd ..
git clone https://github.com/eguneys/solid-play
cd solid-play
pnpm install
pnpm build
pnpm link --dir ./ --global
cd ..
git clone https://github.com/eguneys/chessboard23
cd chessboard23
pnpm install
pnpm build
pnpm link --dir ./ --global
cd ..
git clone https://github.com/eguneys/chessreplay23
cd chessreplay23
pnpm install
pnpm build
pnpm link --dir ./ --global
cd ..
