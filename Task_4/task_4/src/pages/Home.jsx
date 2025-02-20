import { useState } from "react";
import TitleSearch from "../components/TitleSearch";
import CategorySort from "../components/CategorySort";
import "../styles/home.scss";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Most Recent");

  const categories = ["Design", "Product", "Software Engineering", "Customer Success"];

  return (
    <div className="home">
      <TitleSearch onSearch={setSearchTerm} />
      <CategorySort
        categories={categories}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOrder}
      />
    </div>
  );
}

export default Home;
