import SvgSelector from "@components/Svg/SvgSelector";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import styled from "@emotion/styled";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import usePayment from "@hooks/profile/usePayment";

type Props = {
  text1: String;
  text2?: String;
  afterPay?: boolean;
  quantity?: number;
  isClcik?: boolean;
};

function MatchingTicket({
  text1,
  text2,
  afterPay = false,
  quantity = 1,
  isClcik = false,
}: Props) {
  const price: number = 1000;
  const { payment, data } = usePayment();
  return (
    <>
      <Container>
        <SvgSelector svg="payment" height={30} width={30} stroke={"#A86EFA"} />
        <Content>
          <Text {...FontStyle(14, 700, 23, "#212121")}>{text1}</Text>
          {afterPay && <Text {...FontStyle(11, 600, 20, "#333")}>{text2}</Text>}
        </Content>
      </Container>
      <Seperator height={3} />
      <DividerDefault width={"100%"} />
      <Seperator height={6} />
      {isClcik && (
        <button
          onClick={() => {
            payment({ quantity: quantity, totalAmount: quantity * price });
            window.location.href = data.next_redirect_pc_url;
          }}
        >
          {quantity * price} 원
        </button>
      )}
    </>
  );
}

const Container = styled.div`
  width: 50vw;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
  width: max-content;
`;

export default MatchingTicket;
