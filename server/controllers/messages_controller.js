messages = [];
id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;

        const newMessage = {
            text,
            time,
            id
        };

        id++;
        messages = [...messages, newMessage];
        res.status(200).send(messages);

    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];
        messages[messageIndex] ={
            id: message.id,
            text: text || message.text,
            time: message.time

        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}