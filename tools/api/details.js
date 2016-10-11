import { Router } from 'express';
const router = Router();





router.get('/', (req,res) => {
  if(err) return res.status(400).send(err);

  factual.get('/t/restaurants-us', {q:"sushi" ,filters: { "$and": [{ "category_ids": {"$excludes": 355} }, { "$and": [{ "locality": "los angeles" }, { "region": "ca" }] }] } }, function(error, res) {
  console.log(res.data);
});

}


export default router;
