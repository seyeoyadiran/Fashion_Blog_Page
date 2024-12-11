import image1 from './imgs/blogIm1.jpg'
import image2 from './imgs/blogIm2.jpg'

export const Article = function (){
    
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <time datetime="2015-08-07">5 Dec 2024</time>
        <h2>On The Street in Brookyln </h2>
        <img src={image1} alt="street of Brookyn"/>
        <p class="myText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illum? Nulla, deserunt velit iste impedit esse molestiae, voluptatem, tempore laborum sit in repellat id sunt. Autem officiis nemo eius minima?</p>
        <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#"> Fashion in Cincinnati </a></li>
        <li><a href="#"> How to Find your Style </a></li>
      </ul>
      <p>Continues...</p>
    </aside>

    {/*Article 2 */}
    <article>
    <time datetime="2015-08-07">7 Aug 2015</time>
    <h2>Vintage in Vogue </h2>
    <img src={image2} alt="street of Brookyn"/>
    <p class="myText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illum? Nulla, deserunt velit iste impedit esse molestiae, voluptatem, tempore laborum sit in repellat id sunt. Autem officiis nemo eius minima?</p>
    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">Are Old School Styles Making A Comback?</a></li>
        <li><a href="#">How To Bring Color to Dull Clothes</a></li>
      </ul>
    </aside>
    <p>Continues...</p>
    </article>
      </>
    
        
    )
}