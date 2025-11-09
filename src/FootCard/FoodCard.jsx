import React from "react";
import styled from "styled-components";

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="bg" />
                <div className="blob" />

                <div className="content w-10/12">
                    <img
                        src="https://placehold.co/150x100/ffa500/fff?text=Food+Image"
                        alt="Food item"
                        className="food-img"
                    />
                    <h2 className="food-name">Vegetable Fried Rice</h2>

                    <div className="donor-info">
                        <img
                            src="https://placehold.co/40x40/87ceeb/fff?text=D"
                            alt="Donor"
                            className="donor-img"
                        />
                        <span className="donor-name">John Doe</span>
                    </div>

                    <div className="details">
                        <p><strong>Quantity:</strong> 5 Packs</p>
                        <p><strong>Pickup:</strong> Dhaka City</p>
                        <p><strong>Expires:</strong> 2025-11-12</p>
                    </div>
                    <button
                        className=" w-full px-8 mt-4 border-2 font-semibold 
                            rounded-md hover:bg-cyan-100 transition duration-300 
                            transform hover:scale-105 active:scale-95"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 260px;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
    /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 250px;
    height: 350px;
    z-index: 2;
    background: rgb(116, 211, 209);
    backdrop-filter: blur(24px);
    border-radius: 12px;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 59%;
    left: 50%;
    width: 160px;
    height: 250px;
    border-radius: 50%;
    background-color: #8300fd;
    opacity: 0.8;
    filter: blur(18px);
    animation: blob-bounce 7s infinite ease-out;
  }

  .content {
    position: relative;
    z-index: 3;
    /* text-align: center; */
    color: #1e293b;
  }

  .food-img {
    width: 100%;
    height: 130px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 12px;
  }

  .food-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0f172a;
  }

  .donor-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .donor-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }

  .donor-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: #334155;
  }

  .details p {
    font-size: 0.85rem;
    color: #475569;
    margin: 3px 0;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Card;
