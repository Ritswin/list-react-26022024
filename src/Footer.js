function Footer({ items }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.isChecked).length;
  let percentage = Math.round((itemCheckedCount / itemCount) * 100);
  console.log(itemCount);
  return (
    <div className="footer">
      <p>
        You have {itemCount} item in your list. You have already completed{" "}
        {itemCheckedCount}.
      </p>
      {isNaN(percentage) ? (
        <p className="perc">0%</p>
      ) : (
        <p className="perc">{percentage}%</p>
      )}
    </div>
  );
}

export default Footer;
