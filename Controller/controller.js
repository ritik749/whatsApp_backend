import user from '../model/User.js';

export const addUser = async (req, res) => {
  try {
    console.log('jnsac11', req.body);
    let exist = await user.findOne({ sub: req.body.sub });
    console.log('jnsac22', exist);
    if (exist) {
      console.log('jnsac33', exist);
      return res.status(200).send('user is already exist');
    } else {
      let newUser = new user(req.body);

      await newUser.save();

      return res.status(200).send('user is created');
    }
  } catch (err) {
    console.log('adwadwqf', err);

    return res.status(500).send(err);
  }
};

export const getUser = async (req, res) => {
  try {
    let users = await user.find({});

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err);
  }
};
