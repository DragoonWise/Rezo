import axios from 'axios';

class Users {

    static async getUsers() {
        try {
            const res = await axios.get('/api/users');
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    static async getUser(id) {
        try {
            const res = await axios.get('/api/users/'+id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    static async delete(id) {
        try {
            const res = await axios.delete('/api/users/'+id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    static async reactivate(id) {
        try {
            const res = await axios.patch('/api/users/'+id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export default Users;