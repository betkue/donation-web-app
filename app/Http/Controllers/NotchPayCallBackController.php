<?php
namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use NotchPay\NotchPay;
use NotchPay\Payment;
use App\Models\Donation;
class NotchPayCallBackController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        // @ToDO Mis a jour de la commande dans votre base de données
        NotchPay::setApiKey('pk_test.ThBuWaKHNVGH5cgsNjaZHDnDNbnzRKzxfdN6YSE0cjsJQWmre1V8pyigvtfBV170B5r1WTCC04gG8hWgMICi63fhDDJZtGL3z3Y6ffQ4Ucv47BolX4VlVeXzxdRsx');

        $verifyTransaction = Payment::verify($request->get('reference'));




        if ($verifyTransaction->transaction->status === 'canceled') {
            session()->flash('error', __('Votre achat a été annulé veuillez relancer si vous souhaitez payer votre produit, Merci.'));
            return redirect(route('payment-error'));
        } else {
            // @ToDO Envoie de mail de remerciement pour l'achat' de l'utilisateur qui est dans la base de données
            $donation = Donation::where('reference', $request->trxref)->first();
            // dd($donation);
            $donation->state = 1;
            $donation->save();
            session()->flash('status', __('Votre achat a été effectué avec succès, Merci pour votre confiance.'));
            return redirect(route('payment-success'));
        }


        return redirect(route('home'));
    }
}
