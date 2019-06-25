import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 382f5722b2d16ed01399a2767e41b5647d0c7f67f45f3a60c35560484f727767"
	}
});