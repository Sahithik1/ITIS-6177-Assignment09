exports.handler = async (event) => {
    console.log(event,"event");
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Sahithi-Koyyalamudi says ${event.keyword}`),
    };
    return response;
};