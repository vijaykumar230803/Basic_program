const prompt = require("prompt-sync")();

const fileExtension = prompt("Enter the file extension: ");

let fileType;

switch (fileExtension) {
    case "jpg":
    case "jpeg":
    case "png":
        fileType = "Image";
        break;
    case "mp3":
    case "wav":
        fileType = "Audio";
        break;
    case "txt":
    case "docx": 
        fileType = "Text File";
        break;
    case "mp4":
    case "mov":
        fileType = "Video";
        break;
    case "js":
    case "py":
    case "c":
    case "cpp":
        fileType = "Programming File";
        break;
    default:
        fileType = "Unknown file type";
}

console.log(fileType);