import React from "react";
import "../assets/css/ListReview.css";
import { useNavigate } from "react-router-dom";

const CreateReview = () => {
    const navigate=useNavigate();
  return (
    <>
   <div className="mainclass">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div class="card text-center reviewInputCard mt-4 mb-3">
            <div class="card-header reviewHeader">Featured</div>
            <div className="card-body reviewCardbody example ">
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Acetaminophen
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Ibuprofen
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Fexofenadine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Loratadine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    className="form-control "
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Hydrocortisone creams
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Dextromethorphan
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>
              <div class="mb-3 mt-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Pseudoephedrine
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    placeholder="Your Review"
                  />
                </div>
              </div>

            </div>
          </div>
          
        </div>
        <div className="d-flex justify-content-center ">
        <button className="btn btn-primary" onClick={()=>navigate("/listOfReview")}>Submit</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default CreateReview;
