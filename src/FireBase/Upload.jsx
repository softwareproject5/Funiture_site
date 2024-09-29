import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

const Upload3DModel = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const storageRef = ref(storage, `models/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error("Upload error: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
          console.log("File available at: ", url);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Model</button>
      <p>Upload Progress: {progress}%</p>
      {downloadURL && (
        <p>
          Model uploaded! Download URL: <a href={downloadURL}>{downloadURL}</a>
        </p>
      )}
    </div>
  );
};

export default Upload3DModel;
