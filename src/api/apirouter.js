import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-52-15-123-215.us-east-2.compute.amazonaws.com/api/user/mobile'
});
