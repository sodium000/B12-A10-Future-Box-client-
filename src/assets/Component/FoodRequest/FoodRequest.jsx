import React from 'react';
import styled from 'styled-components';

const FoodRequest = () => {
    return (
        <div>
            <StyledWrapper>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="email">Write Location</label>
                            <input type="text" id="email" name="Location" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Why need Food</label>
                            <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
                        </div>
                        <div className=" rounded-lg max-w-[350px]">
                            <label className="text-[#717171] text-sm">
                                Phone number
                            </label>
                            <div className="relative mt-2 max-w-xs text-white">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm outline-none rounded-lg h-full">
                                        <option>BD</option>
                                    </select>
                                </div>
                                <input type="text" placeholder="+1 (555) 000-000" className="w-full pl-18 pr-3 py-2 appearance-none bg-transparent outline-none border border-gray-700 focus:border-[#e81cff] shadow-sm rounded-lg" />
                            </div>
                        </div>
                        <label className="cyberpunk-checkbox-label">
                            <input type="checkbox" className="cyberpunk-checkbox" />
                            I have read and agree to the [Terms of Service] and [Privacy Policy].</label>
                        <button className="form-submit-btn" type="submit">Request Food</button>
                    </form>
                </div>
            </StyledWrapper>
        </div>
    );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
    /**
    for chaeck box css
    */
    .cyberpunk-checkbox {
    appearance: none;
    width: 25px;
    height: 20px;
    border: 2px solid #30cfd0;
    border-radius: 5px;
    background-color: transparent;
    display: inline-block;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
  }

  .cyberpunk-checkbox:before {
    content: "";
    background-color: #30cfd0;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .cyberpunk-checkbox:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }

  .cyberpunk-checkbox-label {
    font-size: 15px;
    color: #d3c8c8;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
  }`;


export default FoodRequest;