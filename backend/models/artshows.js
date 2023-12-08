module.exports = (sequlize, DataTypes) => {
    const Artshows = sequlize.define("Artshows", {
        artist: {
            type: DataTypes.STRING(50),
            allowNull: false,
            references : {
                model: "artists",
                key: "artist_name"
            }
        },
        showDate: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true
        },
        location: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true
        },
        contact: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        contPhone: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
    }, 
    {
        createdAt : false,
        updatedAt : false
    })
    return Artshows
}
