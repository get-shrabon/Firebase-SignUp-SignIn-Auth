import Banner from "./Banner/Banner";


const HomePage = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="flex justify-center">
          <div className="stack my-20">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Firebase Recap With React Router</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;