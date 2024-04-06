import { useState, ChangeEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  //ChangeEvent: This is a generic type provided by TypeScript
  //this code snippet is part of an event handler function (changeImageHandler) that is triggered when a file is selected in an input element

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {

    //It captures the selected file and creates a FileReader object to read its contents. This is a common pattern for handling file uploads and processing in web applications.

    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if(file){
        //this code snippet ensures that when a file is selected (if (file)), the FileReader reads the file as a data URL
        reader.readAsDataURL(file);
        //Once the reading operation completes (reader.onloadend), it checks if the result is a string data URL and then uses that data URL to update the photo state or perform other necessary actions.
        reader.onloadend = () => {
            if (typeof reader.result === "string") setPhoto(reader.result);
          };
        }
      };
      return (
        <div className="admin-container">
          <AdminSidebar />
          <main className="product-management">
            <article>
              <form>
                <h2>New Product</h2>
                <div>
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Price</label>
                  <input
                    required
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                </div>
                <div>
                  <label>Stock</label>
                  <input
                    required
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                  />
                </div>
    
                <div>
                  <label>Photo</label>
                  <input required type="file" onChange={changeImageHandler} />
                </div>
    
                {photo && <img src={photo} alt="New Image" />}
    
                <button type="submit">Create</button>
              </form>
            </article>
          </main>
        </div>
      );
    };
    
export default NewProduct;