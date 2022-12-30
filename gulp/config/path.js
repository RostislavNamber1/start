import * as nodePath from `path`;
const rootFolder = nodePath.dasename(nodePath.resolve());

const builFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {},
    clean: builFolder,
    builFolder: builFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}