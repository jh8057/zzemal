import Card from "./Card.js";

export const findInfoById = (data, id) => {
  return data.find((cat) => cat.id === id);
};

export const getLastIdx = (data, lastIdx, offset) => {
  if (data.length < offset || lastIdx > data.length - offset) {
    return data.length;
  } else {
    return lastIdx + offset;
  }
};

export default class ResultSection {
  constructor($target, data) {
    this.section = document.createElement("section");
    this.section.className = "result-section";
    this.data = data;
    this.lastIdx = 0;
    $target.appendChild(this.section);
    this.render();
    this.lazyLoadObserver();
  }
  setState(data) {
    this.data = data;
    this.render();
    this.lazyLoadObserver();
  }
  closeModal() {
    const modal = document.querySelector(".modal-wrapper");
    modal.remove();
  }
  lazyLoadObserver() {
    const options = { threshold: 0 };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          entry.target.src = entry.target.dataset.src;
        }
      });
    };
    const io = new IntersectionObserver(callback, options);
    const lazyImages = Array.from(document.querySelectorAll(".lazy"));
    lazyImages.forEach((image) => {
      io.observe(image);
    });
    // console.log("LAZY", lazyImages);
  }

  // setScrollPagingObserver(data, lastIdx) {
  //   const options = { threshold: 0, rootMargin: "10px 0px" };
  //   const callback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         awconst newLastIdx = getLastIdx(this.data, lastIdx, 15);
  //         if (newLastIdx === lastIdx) {
  //           observer.unobserve(entry.target);
  //         } else {
  //           observer.unobserve(entry.target);
  //           const fetchData = this.data.slice(lastIdx + 1, newLastIdx + 1);
  //           lastIdx = newLastIdx;
  //           fetchData.forEach((cat) => {
  //             new Card(document.querySelector(".card-contianer"), cat);
  //           });
  //           observer.observe(
  //             document.querySelector(".card-container").lastChild
  //           );
  //           this.lazyLoadObserver();
  //         }
  //         entry.target.src = entry.target.dataset.src;
  //       }
  //     });
  //   };
  //   const io = new IntersectionObserver(callback, options);
  //   const lastData = document.querySelector(".card-container").lastChild;
  //   io.observe(lastData);
  // }

  render() {
    this.section.innerHTML = "";
    if (this.data === null) {
      console.log("데이터가 없을 경우");
      const initialResult = document.createElement("div");
      initialResult.className = "initial-result";
      initialResult.innerHTML = "<h1>검색어를 입력해주세요!</h1>";
      this.section.appendChild(initialResult);
    } else {
      if (this.data.length > 0) {
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container";
        const lastIdx = getLastIdx(this.data, 0, 15);
        if (lastIdx != this.data.length) {
          const fetchData = this.data.slice(0, lastIdx + 1);
          fetchData.forEach((cat) => new Card(cardContainer, cat));
        } else {
          this.data.forEach((cat) => {
            new Card(cardContainer, cat);
          });
        }

        cardContainer.addEventListener("click", (e) => {
          const clickedCard1 = e.path;
          const clickedCard2 = e.path.find((p) => p.className == "card");
          console.log(clickedCard1);
          if (clickedCard2) {
            const id = clickedCard2.dataset.id;
            const info = findInfoById(this.data, id);
            console.log("INFO", info);
            // const cardModal = new cardModal(info)
          }
        });

        //   document.addEventListener("keydown", (e) => {
        //     if (
        //         e.key === "Escape" &&
        //         document.querySelector(".modal-wrapper")
        //     ) {
        //         this.closeModal();
        //     }
        // });

        console.log("데이터가 있을 경우1");
        this.section.appendChild(cardContainer);
        // if (lastIdx != this.data.length) {
        //   this.setScrollPagingObserver(this.data, lastIdx);
        // }
      } else {
        const noResult = document.createElement("div");
        noResult.className = "no-result";
        noResult.innerHTML = "<h1>검색어에 해당하는 냥이가 없습니다😭</h1>";
        this.section.appendChild(noResult);
      }
      console.log("데이터가 있을 경우2");
    }
  }
}
