import {
  addNewPlayer,
  getPlayers,
  updatePlayer,
  getPlayerWithId,
  deletePlayer,
} from '../controllers/playerControllers';

const routes = (app) => {
  app
    .route('/players')
    .get(getPlayers)
    //PORT endpoint
    .post(addNewPlayer);
  app
    .route('/player/:PlayerId')
    .get(getPlayerWithId)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
