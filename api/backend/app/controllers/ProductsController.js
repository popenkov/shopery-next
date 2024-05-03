import ProductModel from '../models/Product.js';

export const getCategories = async (req, res) => {
    try {
        const products = await ProductModel.find().limit(5).exec();

        const categories = products
            .map((obj) => obj.category)
            .flat()
            .slice(0, 5);

        res.json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить категории',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find()
            .sort({ createdAt: 'desc' })
            .exec();
        res.json({ products, sort: 'default' });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const productId = req.params.id;

        //изменяем количество просмотров
        ProductModel.findOneAndUpdate(
            {
                _id: productId,
            },
            {
                $inc: { viewsCount: 1 },
            },
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось вернуть продукт',
                    });
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Продукт не найден',
                    });
                }

                res.json(doc);
            },
        ).populate('user');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить продукты',
        });
    }
};

// todo если делать админку
// export const create = async (req, res) => {
//     try {
//         const doc = new ProductModel({
//             title: req.body.title,
//             text: req.body.text,
//             imageUrl: req.body.imageUrl,
//             tags: req.body.tags.split(','),
//             user: req.userId,
//         });

//         const post = await doc.save();

//         res.json(post);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: 'Не удалось создать статью',
//         });
//     }
// };

// export const update = async (req, res) => {
//   try {
//     const postId = req.params.id;

//     await ProductModel.updateOne(
//       {
//         _id: postId,
//       },
//       {
//         title: req.body.title,
//         text: req.body.text,
//         imageUrl: req.body.imageUrl,
//         user: req.userId,
//         tags: req.body.tags.split(','),
//       }
//     );

//     res.json({
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Не удалось обновить статью',
//     });
//   }
// };
