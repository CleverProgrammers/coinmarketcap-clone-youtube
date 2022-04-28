import { client } from '../../lib/client'

export default getCurrentUser = async (req, res) => {
  console.log("<<<<<<<<<<<<<<<THIS IS FECTHING CURRENT USER DATA>>>>>>>>>>>>", req.query.account);

  const query = `*[_type == "users" && walletAddress == "${req.query.account}"]{
    name,
    "avatar": profileImage.asset->url
  }`

  try {
    const sanityResponse = await client.fetch(query)
    res.status(200).send(await sanityResponse[0])
  } catch (error) {
    console.error(error, "SANITY ERROR")
    res.status(500).send(error)
  }
}
