import HeroImage from "../assets/images/MCC.jpg";
import AboutImage from "../assets/images/MCC2.jpg";
import Profile1 from "../assets/images/profile-1.jpg";
import org from "../assets/images/org.png";
import "./Contact.css";
import Swal from "sweetalert2";

const HomePage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c26ac3b5-3e36-48bf-a2eb-00635bd77bba");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Berhasil Terkirim!",
        icon: "success",
      });
    }
  };

  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Gedung Creative Center merupakan bentuk stimulasi yang diberikan
              kepada pelaku kreatif di Jawa Barat, terutama kepada generasi muda
              guna menunjang industri kreatif dalam meningkatkan ekonomi.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="Aboout Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
            />
          </div>
          <div className="pt-20 box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Gedung Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/loose text-justify">
              <span className="font-bold">Gedung Creative Center</span> telah
              berdiri di Kabupaten Majalengka. Bangunan yang ditujukan sebagai
              ruang industri kreatif tersebut diresmikan pada 11 Januari 2023.
              Dalam proses peresmian, hadir Menteri Koperasi dan Usaha Kecil
              Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul Ulum,
              Bupati Majalengka Karna Sobahi, serta sejumlah tokoh Forkopimda.
              Kegiatan peresmian tersebut juga dihadiri Kepala Dinas Pariwisata
              dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang diwakili
              Kepala Bidang Industri Pariwisata Rispiaga. Menurut Menteri
              Koperasi UMKM, keberadaan Gedung Creative Center Majalengka mejadi
              sebuah solusi dari ancaman resesi ekonomi. Masyarakat khususnya
              generasi muda bisa memanfaatkan Gedung Creative Center ini sebagai
              sarana pengembangan industri kreatif serta pemasaran produk-produk
              lokal.
            </p>
          </div>
        </div>
        <div className="box pt-32" id="visimisi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Visi & Misi <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
            <h3 className="pt-1 text-2xl font-medium text-sky-400">Visi</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              expedita rerum odio in officia eum!
            </p>
            <h3 className="pt-5 text-2xl font-medium text-sky-400">Misi</h3>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              expedita rerum odio in officia eum!
            </p>
          </div>
        </div>

        <div className="pt-32" id="organisasi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Struktur <span className="font-bold text-sky-400">Organisasi</span>
          </h1>
          <p className="pt-1 text-center">Majalengka Creative Center</p>
          <img
            src={org}
            alt="Struktur Organisasi"
            className="pt-10 text-center lg:w-[500px] w-[400px] md:m-50 mx-auto rounded-lg shadow"
          />
        </div>

        <div className="pt-32" id="galeri">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Galeri <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <p className="pt-1 text-center">Galeri Majalengka Creative Center</p>
        </div>

        <div className="profile pt-32" id="profile">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Profil <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <p className="text-center">Ekonomi Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
          </div>
        </div>
        <div className="kontak pt-32" id="kontak">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Kontak <span className="font-bold text-sky-400">Kami</span>
          </h1>
          <section className="contact">
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input
                  type="email"
                  className="field"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className="field mess"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex px-5 mx-0 bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
