module.exports = (sequlize, DataTypes) => {
    const Artist = sequlize.define("Artist", {
        artist_name: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
        address: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        birthplace: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        artStyle: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, 
    {
        createdAt : false,
        updatedAt : false
    })
    return Artist
}
