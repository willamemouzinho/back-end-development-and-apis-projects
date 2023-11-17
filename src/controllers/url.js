const { Router } = require("express");
const {
  createUrl,
  listUrls
} = require("../services/url");

const router = Router();

router.get("/", async (req, res) => {
  try {
    // return res.status(200).send({message: "rota listUrls"});
    const urls = await listUrls();
    
    return res.status(200).send(urls);
  } catch (error) {
    console.log("erro na rota get /api")
    return res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const url = await createUrl(req.body);
    
    return res.status(201).send(url);
  } catch (error) {
    console.log("erro na rota post /api")
    return res.status(400).send(error);
  }
});

// router.delete("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   console.log(userId);
//   try {
//     await deleteUser(userId);

//     return res.status(204).send("deleted");
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

// router.put("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   const userUpdated = req.body;

//   try {
//     await updateUser(userId, userUpdated);

//     return res.status(204).send();
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

module.exports = router;
