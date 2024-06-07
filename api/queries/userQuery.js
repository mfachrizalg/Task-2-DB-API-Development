const updateUser = "UPDATE public.user SET passwordhash = $1, email = $2 WHERE username = $3 RETURNING *";
const getAllUsers = "SELECT * FROM public.user";

module.exports = {
    updateUser,
    getAllUsers
}