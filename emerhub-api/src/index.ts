import './LoadEnv'; //Don't change position /// GennadySX
import app from '@server';
import logger from '@config/Logger';


// Start the server
const port = Number(process.env.PORT || 3000);



const configAPI = app.listen(port, () => {logger.info('Express server port => : ' + port)});

