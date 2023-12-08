module.exports = (sequlize, DataTypes) => {
    const Artwork = sequlize.define("Artwork", {
        artist: {
            type: DataTypes.STRING(50),
            allowNull: false,
            references : {
                model: 'artists',
                key: "artist_name"
            }
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true
        },
        artType: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        dateAcq: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        price : {
            type : DataTypes.FLOAT,
            allowNull: true
        },
        location : {
            type: DataTypes.STRING(50),
            allowNull : true
        }
    }, 
    {
        createdAt : false,
        updatedAt : false
    })
    return Artwork
}
