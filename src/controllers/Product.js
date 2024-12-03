require('dotenv').config();
const { BlobServiceClient } = require('@azure/storage-blob');
const Product = require('../db/Schemas/Product');
const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_KEY)


const insertProduct = async (req, res) => {
    try {
        // const space = await Space.create(req.body);
        // const imgs = [];
        // for (const file of req.files) {
        //     const { buffer, originalname } = file;
        //     const containerClient = blobService.getContainerClient('photos');
        //     const blobClient = containerClient.getBlockBlobClient(`${space._id}_${originalname}`);
        //     await blobClient.uploadData(buffer);
        //     imgs.push(blobClient.url);
        // }
        // space.imgs = imgs;
        // await space.save();
        console.log(req.body);
        await Product.create(req.body);
        return res.status(200).json({ ok: 'Successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    insertProduct
}