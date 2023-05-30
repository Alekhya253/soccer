import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.json(savedPlayer);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPlayerWithId = async (req, res) => {
  try {
    const player = await Player.findById(req.params.PlayerId);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findOneAndUpdate(
      { _id: req.params.PlayerId },
      req.body,
      { new: true }
    );

    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.json(player);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.PlayerId);

    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
