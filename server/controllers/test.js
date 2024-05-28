const getMessage = async (req, res) => {
    res.status(200).send({
      message: 'Hello World'
    })
}

export {
    getMessage
}


