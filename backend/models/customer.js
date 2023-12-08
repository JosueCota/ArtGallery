module.exports = (sequlize, DataTypes) => {
    const Customer = sequlize.define("Customer", {
        custNum: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        custPhone: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
        artPref: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, 
    {
        createdAt : false,
        updatedAt : false
    })
    return Customer
}

