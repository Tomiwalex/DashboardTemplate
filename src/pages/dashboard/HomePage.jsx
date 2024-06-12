/* eslint-disable no-unused-vars */
import { useState } from "react";
import Loading from "../../components/common/Loading";
import CardDataStats from "../../components/CardDataStats";
import ChartOne from "../../components/Charts/ChartOne";
import ChartTwo from "../../components/Charts/ChartTwo";
import DefaultLayout from "../../layout/DefaultLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="">
      {isLoading && <Loading />}

      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats title="Users" total="300k" rate="0.43%" levelUp>
            <Icon width={20} icon={"uil-user"} />
          </CardDataStats>
          <CardDataStats title="Donations" total="400m" rate="90.43%" levelUp>
            <Icon width={20} icon={"uil-dollar-sign"} />
          </CardDataStats>
          <CardDataStats title="Subscribers" total="1m" rate="10.43%" levelUp>
            <Icon width={20} icon={"uil-shield-check"} />
          </CardDataStats>
          <CardDataStats title="Testimonies" total="1m" rate="10.43%" levelUp>
            <Icon width={20} icon={"uil-microphone"} />
          </CardDataStats>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default HomePage;
