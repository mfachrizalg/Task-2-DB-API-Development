const updateUser = "UPDATE public.user SET passwordhash = $1, email = $2 WHERE username = $3 RETURNING *";
const getAllUsers = "SELECT * FROM public.user";
const addUser = "INSERT INTO public.user (userid, username, passwordhash, email) VALUES ($1, $2, $3, $4) RETURNING *";
const deleteUser = "DELETE FROM public.user WHERE username = $1 RETURNING *";

module.exports = {
    updateUser,
    getAllUsers,
    addUser,
    deleteUser
}