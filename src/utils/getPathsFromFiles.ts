import fs from "fs";
import path from "path"
const getFolderPathsFromFolderPath = (folderPath: string) => {
    let response: string[] = [];
    fs.readdirSync(folderPath).forEach(folder => {
        const fullFilePath = path.join(folderPath, folder);
        if (fs.statSync(fullFilePath).isDirectory()) {
            response = response.concat(getFolderPathsFromFolderPath(fullFilePath));
        } else {
            response.push(fullFilePath);
        }
    })
    return response;
}

const getFolderPathsFromId = (id: string) => {
    const folderPath = `./dist/output/${id}`;
    return getFolderPathsFromFolderPath(folderPath);
}

export {
    getFolderPathsFromId
}