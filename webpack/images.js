module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg|ico)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'image/[name].[ext]'
                    }
                }
            ]
        }
    }
};