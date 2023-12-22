export default {
	async SetUser () {
		storeValue('user', User_Input.text);
		await GetUserByUsername.run({'username': User_Input.text});
		var user = GetUserByUsername.data[0];
		storeValue('role', user.rol);
		storeValue('user_id', user.user_id);
	}
}