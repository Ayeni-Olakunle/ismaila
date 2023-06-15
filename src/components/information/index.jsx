import profileMan from "../../assets/profile.jpg";
import Ismail from "../../assets/Ismail.pdf";
import infoStyle from "./index.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { TbCopy } from "react-icons/tb";

export default function Index() {
  return (
    <section>
      <div className={infoStyle.infoMa}>
        <div className={infoStyle.prokIm}>
          <div className={infoStyle.imgi}>
            <img src={profileMan} alt="Profile" width="100%" />
          </div>
          <div className={infoStyle.greenDot}></div>
        </div>

        <div className={infoStyle.socialLink}>
          <h3 className={infoStyle.name}>Ismail Odubowale</h3>
          <p className={infoStyle.positi}>CINEMATOGRAPHER | VIDEO EDITOR</p>
          <div className={infoStyle.holdLinks}>
            <div className={infoStyle.socialIcons}>
              <a
                href="https://www.facebook.com/odubowalei1?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className={infoStyle.soIcons} />
              </a>
            </div>
            <div className={infoStyle.socialIcons}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter className={infoStyle.soIcons} />
              </a>
            </div>
            <div className={infoStyle.socialIcons}>
              <a
                href="http://linkedin.com/in/odubowale"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className={infoStyle.soIcons} />
              </a>
            </div>
            <div className={infoStyle.socialIcons}>
              <a
                href="https://instagram.com/sixty6media_ltd?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className={infoStyle.soIcons} />
              </a>
            </div>
            <div className={infoStyle.socialIcons}>
              <a
                href="https://wa.me/message/YGNJMSUWTNJVI1"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className={infoStyle.soIcons} />
              </a>
            </div>
          </div>
        </div>

        <div className={infoStyle.AllSkills}>
          <div className={infoStyle.holdLoco}>
            <div className={infoStyle.loco}>
              <span className={infoStyle.textLoco}>Nationality:</span>
              <span className={infoStyle.textLoco2}>Nigeria</span>
            </div>
            <div className={infoStyle.loco}>
              <span className={infoStyle.textLoco}>Freelancer:</span>
              <span className={infoStyle.textLoco2}>Avilable</span>
            </div>
            <div className={infoStyle.loco}>
              <span className={infoStyle.textLoco}>Address::</span>
              <span className={infoStyle.textLoco2}>
                11, AboruIyana-Ipaja, Lagos
              </span>
            </div>
          </div>

          <div className={infoStyle.holdLoco}>
            <h4 className={infoStyle.lang}>Languages</h4>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>English</span>
                <span>90%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progress}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Yoruba</span>
                <span>100%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressY}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Igbo</span>
                <span>40%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressI}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>French</span>
                <span>20%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressF}></div>
              </div>
            </div>
          </div>

          <div className={infoStyle.holdLoco}>
            <h4 className={infoStyle.lang}>Skills</h4>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Adobe Premiere Pro</span>
                <span>90%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progress}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Adobe Photoshop,</span>
                <span>80%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressCSS}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Adobe Audition</span>
                <span>80%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressCSS}></div>
              </div>
            </div>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langText}>
                <span>Audio Recording</span>
                <span>70%</span>
              </div>
              <div className={infoStyle.holdProgress}>
                <div className={infoStyle.progressREACT}></div>
              </div>
            </div>
          </div>
          <div className={infoStyle.holdLoco}>
            <h4 className={infoStyle.lang}>Extra Skills</h4>
            <div className={infoStyle.holdLangText}>
              <div className={infoStyle.langTextExtra}>
                <TbCopy className={infoStyle.langTextExtraIcon} />
                <span>Photography</span>
              </div>
              <div className={infoStyle.langTextExtra}>
                <TbCopy className={infoStyle.langTextExtraIcon} />
                <span>Motion Graphics</span>
              </div>
              <div className={infoStyle.langTextExtra}>
                <TbCopy className={infoStyle.langTextExtraIcon} />
                <span>Film & Video Editing</span>
              </div>
              <div className={infoStyle.langTextExtra}>
                <TbCopy className={infoStyle.langTextExtraIcon} />
                <span>Film Directing</span>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>

        <a href={Ismail} target="_blank" rel="noopener noreferrer">
          <div className={infoStyle.holdButin}>
            <button>
              Downlaod CV <AiOutlineDownload />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}
