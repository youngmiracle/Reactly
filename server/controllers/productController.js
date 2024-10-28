const {Product, ProductInfo, ProductSize} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController{
    async create(req,res, next){
        try {
            const {name, img, info, size, id_type} = req.body;
            const product = await Product.create({name, img, id_type});
            if(info, size){
                info.forEach(element => {
                    ProductInfo.create({title: element.title, description: element.description, id_product: product.id_product});
                });
                size.forEach(element => {
                    ProductSize.create({size: element.size, price: element.price, id_product: product.id_product});
                });
                res.status(200).json({message:'Продукт успешно создан.'});
            }
            
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        let {id_type, limit, page} = req.query;
        page = Number(page) || 1
        limit = Number(limit) || 8
        let offset = page * limit - limit;
        let products;
        if(!id_type){
            products = await Product.findAndCountAll({limit, offset, include: [{model: ProductInfo, as:'product_infos'}, {model: ProductSize, as: 'product_sizes'}]});
        }else if(id_type){
            products = await Product.findAndCountAll({where:{id_type},limit, offset, include: [{model: ProductInfo, as:'product_infos'}, {model: ProductSize, as: 'product_sizes'}]});
        }
        return res.json(products);
    } 
    async getOne(req, res, next){
        let id_product = req.params;
        id_product = JSON.parse(id_product.id)
        const product = await Product.findOne({where:{id_product}, include:[{model: ProductInfo, as:'product_infos'}]});
        return res.json(product);
    }
}

module.exports = new ProductController;