const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id_user: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    login: {type:DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
},{
    timestamps:false,
    tableName:'user'
})

const Basket = sequelize.define('basket', {
    id_basket: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id_user: {type: DataTypes.INTEGER}
},{
    timestamps:false,
    tableName:'basket'
})

const BasketProduct = sequelize.define('basket_product', {
    id_basket_product: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id_product: {type: DataTypes.INTEGER},
    id_basket: {type: DataTypes.INTEGER}

},{
    timestamps:false,
    tableName:'basket_product'
})

const Product = sequelize.define('product', {
    id_product: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING},
    img: {type: DataTypes.STRING},
    id_type: {type: DataTypes.INTEGER}
},{
    timestamps:false,
    tableName:'product'
})

const ProductInfo = sequelize.define('product_info', {
    id_product_info: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type:DataTypes.STRING},
    description: {type: DataTypes.STRING},
    id_product: {type: DataTypes.INTEGER}
},{
    timestamps:false,
    tableName:'product_info'
})

const ProductSize = sequelize.define('product_size', {
    id_product_size: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    size: {type:DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER},
    id_product: {type: DataTypes.INTEGER}
},{
    timestamps:false,
    tableName:'product_size'
})

const Type = sequelize.define('type', {
    id_type: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull: true},
},{
    timestamps:false,
    tableName:'type'
})

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

Product.hasMany(ProductSize);
ProductSize.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    ProductInfo,
    ProductSize,
    Type
}