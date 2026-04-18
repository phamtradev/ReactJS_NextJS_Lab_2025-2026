
import {
  editorPicks,
  summerRecipes,
  videoRecipes,
} from '../data/recipes';
import Footer from '../layouts/Footer';
import { Navbar } from '../layouts/Navbar';
import EditorPick from '../sections/EditorPick';
import Hero from '../sections/Hero';
import RecipeSection from '../sections/RecipeSection';

function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />

      <main>
        <Hero />

        <RecipeSection
          id="summer-recipes"
          title="This Summer Recipes"
          subtitle="We have all your seasonal sweets and fresh cooking inspiration covered."
          recipes={summerRecipes}
        />

        <RecipeSection
          id="video-recipes"
          title="Recipes With Videos"
          subtitle="Cooking up culinary creations with step-by-step videos."
          recipes={videoRecipes}
        />

        <EditorPick items={editorPicks} />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
