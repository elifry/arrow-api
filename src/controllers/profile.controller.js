const db = require("../config/database");

exports.createProfile = async (req, res) => {
    const { username, imagePath, audioPath } = req.body;
    const { rows } = await db.query(
        "INSERT INTO profiles (username, imagePath, audioPath) VALUES ($1, $2, $3)",
        [username, imagePath, audioPath]
    );

    res.status(201).send({
        message: "Profile added successfully!",
        body: {
            profile: { username, imagePath, audioPath }
        },
    });
};

exports.listAllProfiles = async (req, res) => {
    const response = await db.query('SELECT * FROM profiles ORDER BY profileid DESC');
    res.status(200).send(response.rows);
};

exports.findProfileById = async (req, res) => {
    const profileId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM profiles WHERE profileid = $1', [profileId]);
    res.status(200).send(response.rows);
}

exports.updateProfileById = async (req, res) => {
    const profileId = parseInt(req.params.id);
    const { username, imagePath, audioPath } = req.body;

    const response = await db.query(
        "UPDATE profiles SET username = $1, imagePath = $2, audioPath = $3 WHERE profileId = $4",
        [username, imagePath, audioPath, profileId]
    );

    res.status(200).send({ message: "Profile Updated Successfully!" });
};

exports.deleteProfileById = async (req, res) => {
    const profileId = parseInt(req.params.id);
    await db.query('DELETE FROM profiles WHERE profileId = $1', [
        profileId
    ]);

    res.status(200).send({ message: 'Profile deleted successfully!', profileId });
};