import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
// import {
//   BanknotesIcon,
//   StarIcon,
//   HeartIcon,
//   /* WifiIcon,
//   HomeIcon,
//   TvIcon,
//   FireIcon, */
// } from "@heroicons/react/24/solid";
import LeylandCypress from '../assets/imgs/dev/leyland-cypress.jpeg';
import {Link} from 'react-router-dom';

const ProductsData = [
  {
    id: 1,
    image: LeylandCypress,
    title: "Leyland Cypress",
  },
  {
    id: 2,
    image: LeylandCypress,
    title: "Green Giant Arborvitae",
  },
  {
    id: 3,
    image: LeylandCypress,
    title: "Emerald Green Arborvitae",
  },
  {
    id: 4,
    image: LeylandCypress,
    title: "Oak Leaf Holly",
  },
  {
    id: 5,
    image: LeylandCypress,
    title: "Nellie Steven's Holly",
  },
  // {
  //   id: 6,
  //   image: LeylandCypress,
  //   title: ,
  // },
  // {
  //   id: 7,
  //   image: LeylandCypress,
  //   title: ,
  // },
  // {
  //   id: 8,
  //   image: LeylandCypress,
  //   title: ,
  // },
  //  {
  //   id: 9,
  //   image: LeylandCypress,
  //   title: ,
  // },

];

export default function Example() {
  return (

    <div className="container justify-center flex flex-wrap">
      {ProductsData.map(({ id, image, title }) => {

        return (
          <Card className="w-full max-w-[26rem] shadow-lg m-10 rounded-md">
            <CardBody className="[background-color:#A7D9D0] rounded-md">
              <div className="mb-3">
                <img src={image} alt={title} className="rounded-t-xl"></img>
                <Typography variant="h5" className="font-medium [color:#064025]">
                  <h4 className="m-4">{title}</h4>
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                </Typography>
              </div>
              <Typography className="[color:#064025] m-4">
                Starting at: $155.00
              </Typography>
              <div className="group mt-8 flex justify-center items-center gap-3 p-4">
                <Button className="[background-color:#064025] px-4 py-2 rounded-lg">
                 <Link to={`/productdetails/${id}`}>Product Details</Link> 
                </Button>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>

  );

}