import axios from 'axios'
import logger from '../../logger.js'

class YoutubeApiProxy {
	static getMetadata(videoId, apiKey, success, failure) {
		const requestUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails,snippet&id=${videoId}&key=${apiKey}`
		// const requestUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails,snippet&fields=items.contentDetails.duration,items.statistics.viewCount&id=${videoId}&key=${apiKey}`
		logger.info(requestUrl);

		axios.get(requestUrl)
			.then(function (response) {
				if (response.data.items && response.data.items.length > 0) {
					success(response.data.items[0]);
				} else {
					const errorMessage = 'Response object was not formatted as expected.';
					logger.error(errorMessage)
					failure(errorMessage);
				}
			})
			.catch(function (error) {
				logger.error(error)
				failure(error)
			})
	}
}

export { YoutubeApiProxy }