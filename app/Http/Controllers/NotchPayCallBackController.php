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
        NotchPay::setApiKey(env('NOTCHPAY_PUBLIC_KEY'));

        $verifyTransaction = Payment::verify($request->get('reference'));


        // dd($verifyTransaction->transaction->status);

        if ($verifyTransaction->transaction->status === 'complete') {
            // @ToDO Envoie de mail de remerciement pour l'achat' de l'utilisateur qui est dans la base de données
            $donation = Donation::where('reference', $request->trxref)->first();
            // dd($donation);
            $donation->state = 1;
            $donation->save();
            session()->flash('status', __('Votre achat a été effectué avec succès, Merci pour votre confiance.'));
            return redirect(route('payment-success'));
        } else {
            session()->flash('error', __('Votre achat a été annulé veuillez relancer si vous souhaitez payer votre produit, Merci.'));
            return redirect(route('payment-error'));
        }


        // if ($verifyTransaction->transaction->status === 'canceled') {
        //     session()->flash('error', __('Votre achat a été annulé veuillez relancer si vous souhaitez payer votre produit, Merci.'));
        //     return redirect(route('payment-error'));
        // } else {
        //     // @ToDO Envoie de mail de remerciement pour l'achat' de l'utilisateur qui est dans la base de données
        //     $donation = Donation::where('reference', $request->trxref)->first();
        //     // dd($donation);
        //     $donation->state = 1;
        //     $donation->save();
        //     session()->flash('status', __('Votre achat a été effectué avec succès, Merci pour votre confiance.'));
        //     return redirect(route('payment-success'));
        // }


        // return redirect(route('home'));
    }
}
