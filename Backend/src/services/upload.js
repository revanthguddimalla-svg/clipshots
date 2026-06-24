const ImageKit = require('@imagekit/nodejs');
const {image_kit} =require("../config/env")

const imagekit = new ImageKit({
  privateKey: image_kit, // This is the default and can be omitted
});

exports.upload = async (buffer) => {
  try {
    const response = await imagekit.files.upload({
      file: buffer.toString("base64"),
      fileName: "post",
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};