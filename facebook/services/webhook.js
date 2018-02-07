const Service = (req, res, next) => {
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.verify_token'] == process.env.TOKEN) {
    console.log('validation ok!');
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.log('validation fail!');
    res.sendStatus(403);
  }
};

export default Service;