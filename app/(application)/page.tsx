import { Button, Card, CardBody, Divider } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex  px-4 py-5">
      <Card className=" bg-transparent relative">
        <CardBody className="w-full h-full p-0 m-0 ">
          <div className="w-full h-full ">
            <Image
              src="/home-card.png"
              alt="nextui logo"
              width={500}
              height={500}
              quality={100}
              className=" w-full h-full block object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <Button
              color="default"
              className="bg-primary-900 h-10 text-ellipsis font-bold"
            >
              Reservando agora
            </Button>
          </div>
          <Image
            src="/home-card-pic.png"
            alt="nextui logo"
            width={500}
            height={500}
            quality={100}
            className="phone:max-w-48 sm:min-w-96  absolute bottom-0 right-0"
          />
        </CardBody>
        <Divider />
      </Card>
    </div>
  )
}
